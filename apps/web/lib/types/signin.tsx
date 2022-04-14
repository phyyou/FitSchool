type TokenType = "bearer"

export interface Token {
  access_token: string;
  token_type: TokenType;
  expires: number;
}
