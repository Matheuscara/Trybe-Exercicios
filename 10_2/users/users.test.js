const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('when getUserName is defined', () =>{
  it('should return user name using user id', () => {
    return getUserName(4).then(listUser => { expect(listUser).toBe('Mark') });
  });
  it('should throw a exception when user id does not exist', () => {
    const userId = 6;
    return getUserName(userId).catch((error) => expect(error).toEqual({ error: 'User with ' + userId + ' not found.' }));
  })
});

describe('using async/await to test getUsername', () => {
  it('should return user name using user id', async () => {
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  });
  it('should throw a exception when user id does not exist', async () => {
    const userId = 6;
    try {
      await getUserName(userId);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + userId + ' not found.' });
    }
  })
})