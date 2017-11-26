export const fetchUser = username =>
  new Promise(resolve => {
    resolve({
      profile: {
        username,
        aliases: [
          {
            type: 'irl',
            value: 'Kenneth Lee'
          },
          {
            type: 'callMe',
            value: 'Ken'
          },
          {
            type: 'legal',
            value: 'Changbok Kenneth Lee'
          }
        ]
      },
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
