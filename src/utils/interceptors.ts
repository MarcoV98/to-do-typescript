import axios from 'axios';

let countRequests = 0;
let setLoading: (value: boolean) => void;
let setError: (value: string | null) => void;

export const Interceptor = (
	loadingSet: (value: boolean) => void,
	errorSet: (value: string | null) => void
) => {
	setLoading = loadingSet;
	setError = errorSet;

	axios.interceptors.request.use(
        (config) => {
          countRequests += 1;
          setLoading(true);
          return config;
        },
        (error) => {
          countRequests -= 1;
          if (countRequests === 0) {
            setLoading(false);
          }
          return Promise.reject(error);
        }
      );

	axios.interceptors.response.use(
        (response) => {
            countRequests -= 1;
            if (countRequests === 0) {
                setLoading(false);
            }

            return response;
        },

        (error) => {
            countRequests -= 1;
            if(countRequests === 0) {
                setLoading(false);
            }

            if (axios.isAxiosError(error)) {
				if (error.code === 'ECONNABORTED') {
					setError('La richiesta ha superato il tempo limite.');
				} else if (error.response) {
					setError(`Errore ${error.response.status}: ${error.response.statusText}`);
				} else if (error.response === undefined) {
					setError('Errore di rete');
				}
			} else {
				setError('Errore sconosciuto.');
			}
            return Promise.reject(error);
        }
    );
};
