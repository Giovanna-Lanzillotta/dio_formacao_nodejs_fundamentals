export enum ContentType {
    // ----------------------------------------------------
    // Formatos Estruturados de Dados (API/REST)
    // ----------------------------------------------------
    JSON = "application/json",
    XML = "application/xml",
    TEXT_XML = "text/xml", // Usado em algumas integrações SOAP

    // ----------------------------------------------------
    // Formatos de Formulário (Requisições POST/PUT)
    // ----------------------------------------------------
    // Usado para dados simples de formulário (chave=valor&...)
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    
    // Usado para upload de arquivos (requisições com arquivos)
    FORM_DATA = "multipart/form-data", 

    // ----------------------------------------------------
    // Tipos de Texto
    // ----------------------------------------------------
    TEXT_PLAIN = "text/plain",
    TEXT_HTML = "text/html",
    TEXT_CSS = "text/css",
    TEXT_JAVASCRIPT = "text/javascript", // Usado para arquivos .js

    // ----------------------------------------------------
    // Tipos de Arquivo Comuns
    // ----------------------------------------------------
    APPLICATION_PDF = "application/pdf",
    APPLICATION_OCTET_STREAM = "application/octet-stream", // Dados binários genéricos

    // ----------------------------------------------------
    // Imagens
    // ----------------------------------------------------
    IMAGE_JPEG = "image/jpeg",
    IMAGE_PNG = "image/png",
    IMAGE_GIF = "image/gif",
    
    // ----------------------------------------------------
    // Streaming (para eventos em tempo real)
    // ----------------------------------------------------
    EVENT_STREAM = "text/event-stream", // Server-Sent Events (SSE)
}