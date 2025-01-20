package com.denisson.server.domain.useCases.upload;

import com.denisson.server.domain.ports.IUpload;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public class FileUploadUseCase {
    private final IUpload repository;

    public FileUploadUseCase(IUpload repository) {
        this.repository = repository;
    }

    public String execute(MultipartFile file) throws IOException {
        return repository.upload(file);  // Passa o MultipartFile para o método de upload
    }
}
