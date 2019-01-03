Displays a user profile picture + basic information in a card, color coded by status.

```js
<FlexRow>
  <UserCard
    user={{
      first_name: 'Nola',
      last_name: 'Chen',
      status: 'I',
      roles: [],
      id: 1,
    }}
    uri="/test"
  />
  <UserCard
    user={{
      first_name: 'Colleen',
      last_name: 'Curtis',
      status: 'M',
      roles: [{ team: 'a', semester: '1' }],
      id: 1,
    }}
    uri="/test"
  />
  <UserCard
    user={{
      first_name: 'Alum',
      last_name: 'Member',
      status: 'A',
      roles: [{ team: 'a', semester: '1' }],
      id: 1,
    }}
    uri="/test"
  />
</FlexRow>
```
