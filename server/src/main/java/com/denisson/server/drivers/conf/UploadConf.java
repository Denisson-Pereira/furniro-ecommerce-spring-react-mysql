package com.denisson.server.drivers.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.server.domain.ports.IUpload;
import com.denisson.server.domain.useCases.upload.FileUploadUseCase;

@Configuration
public class UploadConf {
    private final IUpload repository;

    public UploadConf(IUpload repository) {
        this.repository = repository;
    }

    @Bean
    FileUploadUseCase fileUploadUseCase() {
        return new FileUploadUseCase(repository);
    }
}
