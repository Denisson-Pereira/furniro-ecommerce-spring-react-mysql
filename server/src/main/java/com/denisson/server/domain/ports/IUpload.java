package com.denisson.server.domain.ports;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface IUpload {
    String upload(MultipartFile file) throws IOException;
}
