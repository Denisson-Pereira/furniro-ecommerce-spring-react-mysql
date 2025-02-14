import { renderHook, act, waitFor } from "@testing-library/react";
import { useAuthContext } from "../../../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { getCredentials } from "../../Cache/getCredentials";
import { getCheck } from "../../Cache/getCheck";
import { setCredentials } from "../../Cache/setCredentials";
import { loginServiceLocator } from "../../../../../../Infra/Services/loginServiceLocator";
import { useLoginFormModel } from "./useLoginFormModel";
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

vi.mock("../../../../../../Infra/Services/loginServiceLocator", () => ({
  loginServiceLocator: {
    loginUseCase: {
      execute: vi.fn(),
    },
  },
}));

describe("useLoginFormModel", () => {
  let mockSetUser: ReturnType<typeof vi.fn>;
  let mockSetLoading: ReturnType<typeof vi.fn>;
  let mockNavigate: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockSetUser = vi.fn();
    mockSetLoading = vi.fn();
    mockNavigate = vi.fn();

    (useAuthContext as jest.Mock).mockReturnValue({
      setUser: mockSetUser,
      loading: false,
      setLoading: mockSetLoading,
    });

    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it("should return the correct initial states", () => {
    const { result } = renderHook(() => useLoginFormModel());

    expect(result.current.email).toBe("");
    expect(result.current.password).toBe("");
    expect(result.current.check).toBe(false);
    expect(result.current.visible).toBe(false);
    expect(result.current.loading).toBe(false);
  });

  it("should load credentials from cache when the hook is mounted", async () => {
    (getCredentials as jest.Mock).mockResolvedValue({ email: "teste@email.com", password: "123456" });
    (getCheck as jest.Mock).mockResolvedValue("true");
  
    const { result } = renderHook(() => useLoginFormModel());
  
    await waitFor(() => {
      expect(result.current.email).toBe("teste@email.com");
      expect(result.current.password).toBe("123456");
      expect(result.current.check).toBe(true);
    });
  });

  it("should update the check state and save credentials when handleCache is called", () => {
    const { result } = renderHook(() => useLoginFormModel());

    act(() => {
      result.current.handleCache({ target: { checked: true } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(setCredentials).toHaveBeenCalledWith("", ""); 
    expect(result.current.check).toBe(true);
  });

  it("should log in with correct credentials", async () => {
    (loginServiceLocator.loginUseCase.execute as jest.Mock).mockResolvedValue({ id: 1, name: "User" });

    const { result } = renderHook(() => useLoginFormModel());

    act(() => {
      result.current.setEmail("user@email.com");
      result.current.setPassword("password123");
    });

    await act(async () => {
      await result.current.handleLogin();
    });

    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(loginServiceLocator.loginUseCase.execute).toHaveBeenCalledWith({ email: "user@email.com", password: "password123" });
    expect(mockSetUser).toHaveBeenCalledWith({ id: 1, name: "User" });
    expect(mockNavigate).toHaveBeenCalledWith("/shop");
    expect(mockSetLoading).toHaveBeenCalledWith(false);
  });

  it("should show an error if login fails", async () => {
    (loginServiceLocator.loginUseCase.execute as jest.Mock).mockRejectedValue(new Error("Login falhou"));

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
