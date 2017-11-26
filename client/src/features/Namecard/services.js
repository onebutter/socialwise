export const fetchUser = name =>
  new Promise(resolve => {
    resolve({
      name,
      services: [
        {
          type: 'facebook',
          url: 'http://www.facebook.com/donkeysmash'
        },
        {
          type: 'email',
          url: 'changbok89@gmail.com'
        }
      ]
    });
  });
