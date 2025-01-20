package com.denisson.server.domain.entities;

public class FileResponse {
    
    private String message;
    private String filePath;
    
    public FileResponse(String message, String filePath) {
        this.message = message;
        this.filePath = filePath;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
    
}
