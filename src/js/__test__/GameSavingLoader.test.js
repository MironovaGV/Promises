import GameSavingLoader from '../GameSavingLoader';

test('работа Promise', () => {
  GameSavingLoader.load().then((person) => {
    expect(person).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
  });
});
