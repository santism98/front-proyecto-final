import {useFetch} from '../../paraTests/test-1'
import { renderHook } from '@testing-library/react-hooks';



test('useFetch devuelve los valores iniciales correctos', () => {
    const { result } = renderHook(() => useFetch('https://bac-proyecto-final.onrender.com'));
    expect(result.current.river).toEqual([]);
    expect(result.current.total).toBe(0);
    expect(result.current.isLoading).toBe(true);
  });

  // test('useFetch devuelve los valores actualizados después de la petición', async () => {
  //   const searchRivers = [{ name: 'Río 1' }, { name: 'Río 2' }];
  //   const prodTotal = 2;
  //   global.fetch.mockResolvedValueOnce({
  //     json: async () => ({ searchRivers, prodTotal }),
  //   });
  //   const { result } = renderHook(() => useFetch('localhost:3000/todos'));
  //   await waitForNextUpdate();
  //   expect(result.current.river).toEqual(searchRivers);
  //   expect(result.current.total).toBe(prodTotal);
  //   expect(result.current.isLoading).toBe(false);
  // });

  // test('useFetch maneja errores de petición', async () => {
  //   global.fetch.mockRejectedValueOnce(new Error('Failed to fetch'));
  //   const { result, waitForNextUpdate } = renderHook(() => useFetch('localhost:3000/todos'));
  //   await waitForNextUpdate();
  //   expect(result.current.river).toEqual([]);
  //   expect(result.current.total).toBe(0);
  //   expect(result.current.isLoading).toBe(false);
  // });