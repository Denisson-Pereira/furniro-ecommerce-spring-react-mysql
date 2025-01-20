package com.denisson.server.interfaceAdapters.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.denisson.server.domain.entities.FileResponse;
import com.denisson.server.domain.useCases.upload.FileUploadUseCase;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api")
public class UploadController {

    private final FileUploadUseCase fileUploadUseCase;

    public UploadController(FileUploadUseCase fileUploadUseCase) {
        this.fileUploadUseCase = fileUploadUseCase;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("image") MultipartFile file) {
        try {
            String filePath = fileUploadUseCase.execute(file);
            return ResponseEntity.ok().body(new FileResponse("Imagem salva com sucesso!", filePath));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erro ao salvar o arquivo: " + e.getMessage());
        }
    }
    
    
}
