package com.denisson.server.interfaceAdapters.gateways;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.denisson.server.domain.ports.IUpload;

@Repository
public class UploadImpl implements IUpload{

    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads/";

    @Override
    public String upload(MultipartFile file) throws IOException {
        File uploadDir = new File(UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        String filePath = UPLOAD_DIR + file.getOriginalFilename();

        file.transferTo(new File(filePath));

        return "/uploads/" + file.getOriginalFilename();
    }
    
}
