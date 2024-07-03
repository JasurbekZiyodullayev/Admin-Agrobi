export interface ErrorProps {
  message: string;
  response: {
    data: {
      status: string;
      code: number;
      description: string;
      error: string;
    };
  };
}
