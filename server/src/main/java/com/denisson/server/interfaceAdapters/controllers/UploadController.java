package com.denisson.server.interfaceAdapters.controllers;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.denisson.server.domain.entities.FileResponse;
import com.denisson.server.domain.useCases.upload.FileUploadUseCase;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api")
public class UploadController {

    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads/";

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
    
    @GetMapping("/uploads")
    public ResponseEntity<List<Map<String, String>>> listUploadedFiles() {
        try {

            Path uploadDir = Paths.get(UPLOAD_DIR);

            if (!Files.exists(uploadDir) || !Files.isDirectory(uploadDir)) {
                return ResponseEntity.notFound().build();
            }

            List<Map<String, String>> filesList = Files.walk(uploadDir)
                    .filter(Files::isRegularFile) 
                    .map(path -> {
                        Map<String, String> fileData = new HashMap<>();
                        String filename = path.getFileName().toString();
                        fileData.put("filename", filename);
                        fileData.put("url", "http://localhost:8080/api/uploads/" + filename);
                        return fileData;
                    })
                    .collect(Collectors.toList());

            return ResponseEntity.ok(filesList);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/uploads/{filename}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        try {
            Path filePath = Paths.get(UPLOAD_DIR).resolve(filename);
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() || resource.isReadable()) {
                String contentType = "image/jpeg"; 

                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
}
