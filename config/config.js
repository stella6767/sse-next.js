export const backUrl =
  process.env.NODE_ENV === "production"
    ? "http://localhost:8081" //배포 백엔드 주소
    : "http://localhost:8081"; //개발 백엔드 주소
