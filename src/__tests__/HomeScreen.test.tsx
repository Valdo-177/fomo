// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';
// import axios from 'axios';
// import { act } from 'react-test-renderer';
// import HomeScreen from '../views/HomeScreen';
// import { NavigationContainer } from '@react-navigation/native';

// jest.mock('axios'); // Mock de axios

// const mockEvents = [
//   { public_id: '1', title: 'React Conf', description: 'Evento sobre React', photo_cover: '' },
//   { public_id: '2', title: 'Node.js Summit', description: 'Evento de Node.js', photo_cover: '' },
//   { public_id: '3', title: 'Vue.js Meetup', description: 'Reunión de Vue.js', photo_cover: '' }
// ];

// describe('HomeScreen Tests', () => {
//   beforeEach(() => {
//     // Simulamos la respuesta de la API
//     (axios.get as jest.Mock).mockResolvedValue({ data: { events: mockEvents } });
//   });

//   it('Filtra correctamente los eventos al escribir en el buscador', async () => {
//     const { getByPlaceholderText, getByText, queryByText } = render(
//       <NavigationContainer>
//         <HomeScreen navigation={{ navigate: jest.fn() }} />
//       </NavigationContainer>
//     );

//     await waitFor(() => expect(getByText('React Conf')).toBeTruthy());
//     await waitFor(() => expect(getByText('Node.js Summit')).toBeTruthy());
//     await waitFor(() => expect(getByText('Vue.js Meetup')).toBeTruthy());

//     // Simular la búsqueda de "React"
//     const searchInput = getByPlaceholderText('Buscar');
//     act(() => {
//       fireEvent.changeText(searchInput, 'React');
//     });

//     // React Conf debe seguir visible
//     expect(getByText('React Conf')).toBeTruthy();

//     // Node.js Summit y Vue.js Meetup NO deben aparecer
//     expect(queryByText('Node.js Summit')).toBeNull();
//     expect(queryByText('Vue.js Meetup')).toBeNull();
//   });
// });
