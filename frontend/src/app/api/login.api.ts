export default class Auth {
    private static path = "http://localhost:3000";
    static async authenticate(username: string, password: string) {
        try {
            const response = await fetch(`${Auth.path}/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: username, password }),
            });
      
            if (!response.ok) {
              const error = await response.json();
              return { success: false, error: error.message || "Authentication failed" };
            }
      
            const data = await response.json();
            return { success: true, data };
          } catch (error) {
            return { success: false, error: (error as Error).message || "An unexpected error occurred" };
          }
    }

}