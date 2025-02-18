import { renderHook, act, waitFor } from "@testing-library/react";
import { useAuthContext } from "../../../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { getCredentials } from "../../Cache/getCredentials";
import { getCheck } from "../../Cache/getCheck";
import { setCredentials } from "../../Cache/setCredentials";
import { useLoginFormModel } from "./useLoginFormModel";
import { LoginUseCase } from "../../../../../../Core/UseCases/LoginUseCase/LoginUseCase";
import { vi } from "vitest"; 

vi.mock("../../../../../Context/authContext", () => ({
  useAuthContext: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("../../Cache/getCredentials", () => ({
  getCredentials: vi.fn(),
}));

vi.mock("../../Cache/getCheck", () => ({
  getCheck: vi.fn(),
}));

vi.mock("../../Cache/setCredentials", () => ({
  setCredentials: vi.fn(),
}));

vi.mock("../../../../../../Core/UseCases/LoginUseCase/LoginUseCase", () => {
  return {
    LoginUseCase: vi.fn().mockImplementation(() => ({
      execute: vi.fn(),
    })),
  };
});

describe("useLoginFormModel", () => {
  let mockSetUser: ReturnType<typeof vi.fn>;
  let mockSetLoading: ReturnType<typeof vi.fn>;
  let mockNavigate: ReturnType<typeof vi.fn>;
  let mockLoginUseCase: { execute: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    mockSetUser = vi.fn();
    mockSetLoading = vi.fn();
    mockNavigate = vi.fn();
    mockLoginUseCase = { execute: vi.fn() }; 

    (useAuthContext as unknown as jest.Mock).mockReturnValue({
      setUser: mockSetUser,
      loading: false,
      setLoading: mockSetLoading,
    });

    (useNavigate as unknown as jest.Mock).mockReturnValue(mockNavigate);

    (LoginUseCase as unknown as jest.Mock).mockImplementation(() => mockLoginUseCase);
  });

  it("deve retornar os estados iniciais corretos", () => {
    const { result } = renderHook(() => useLoginFormModel());

    expect(result.current.email).toBe("");
    expect(result.current.password).toBe("");
    expect(result.current.check).toBe(false);
    expect(result.current.visible).toBe(false);
    expect(result.current.loading).toBe(false);
  });

  it("deve carregar credenciais do cache ao montar o hook", async () => {
    (getCredentials as unknown as jest.Mock).mockResolvedValue({ email: "teste@email.com", password: "123456" });
    (getCheck as unknown as jest.Mock).mockResolvedValue("true");

    const { result } = renderHook(() => useLoginFormModel());

    await waitFor(() => {
      expect(result.current.email).toBe("teste@email.com");
      expect(result.current.password).toBe("123456");
      expect(result.current.check).toBe(true);
    });
  });

  it("deve atualizar o estado check e salvar credenciais ao chamar handleCache", () => {
    const { result } = renderHook(() => useLoginFormModel());

    act(() => {
      result.current.handleCache({ target: { checked: true } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(setCredentials).toHaveBeenCalledWith("", ""); 
    expect(result.current.check).toBe(true);
  });

  it("deve fazer login com credenciais corretas", async () => {
    mockLoginUseCase.execute.mockResolvedValue({ id: 1, name: "User" });

    const { result } = renderHook(() => useLoginFormModel());

    act(() => {
      result.current.setEmail("user@email.com");
      result.current.setPassword("password123");
    });

    await act(async () => {
      await result.current.handleLogin();
    });

    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(mockLoginUseCase.execute).toHaveBeenCalledWith({ email: "user@email.com", password: "password123" });
    expect(mockSetUser).toHaveBeenCalledWith({ id: 1, name: "User" });
    expect(mockNavigate).toHaveBeenCalledWith("/shop");
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it("deve exibir erro ao falhar no login", async () => {
    mockLoginUseCase.execute.mockRejectedValue(new Error("Login falhou"));

    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    const { result } = renderHook(() => useLoginFormModel());

    act(() => {
      result.current.setEmail("user@email.com");
      result.current.setPassword("password123");
    });

    await act(async () => {
      await result.current.handleLogin();
    });

    expect(alertMock).toHaveBeenCalledWith("Login failed. Please check your credentials.");
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });
});
