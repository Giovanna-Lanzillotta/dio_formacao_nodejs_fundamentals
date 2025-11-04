export enum StatusCode {
    // ----------------------------------------------------
    // 1xx: Informational (Informativo)
    // ----------------------------------------------------
    Continue = 100,
    SwitchingProtocols = 101,
    Processing = 102, // WebDAV
    EarlyHints = 103, // RFC 8297

    // ----------------------------------------------------
    // 2xx: Success (Sucesso)
    // ----------------------------------------------------
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    MultiStatus = 207, // WebDAV
    AlreadyReported = 208, // WebDAV
    IMUsed = 226, // RFC 3229

    // ----------------------------------------------------
    // 3xx: Redirection (Redirecionamento)
    // ----------------------------------------------------
    MultipleChoices = 300,
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    UseProxy = 305, // Obsoleto
    // 306 é Não Utilizado/Reservado
    TemporaryRedirect = 307,
    PermanentRedirect = 308,

    // ----------------------------------------------------
    // 4xx: Client Error (Erro do Cliente)
    // ----------------------------------------------------
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    PayloadTooLarge = 413, // Entity Too Large
    URITooLong = 414, // Request-URI Too Long
    UnsupportedMediaType = 415,
    RangeNotSatisfiable = 416, // Requested Range Not Satisfiable
    ExpectationFailed = 417,
    ImATeapot = 418, // RFC 2324 & RFC 7168
    MisdirectedRequest = 421,
    UnprocessableEntity = 422, // WebDAV / Erros de validação
    Locked = 423, // WebDAV
    FailedDependency = 424, // WebDAV
    TooEarly = 425, // RFC 8470
    UpgradeRequired = 426,
    PreconditionRequired = 428,
    TooManyRequests = 429,
    RequestHeaderFieldsTooLarge = 431,
    UnavailableForLegalReasons = 451, // RFC 7725

    // ----------------------------------------------------
    // 5xx: Server Error (Erro do Servidor)
    // ----------------------------------------------------
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HTTPVersionNotSupported = 505,
    VariantAlsoNegotiates = 506,
    InsufficientStorage = 507, // WebDAV
    LoopDetected = 508, // WebDAV
    NotExtended = 510,
    NetworkAuthenticationRequired = 511,
}