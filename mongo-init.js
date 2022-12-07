print('Started Adding the Car_Main');
db.createUser({
  user: 'car_admin',
  pwd: '111',
  roles: [{ role: 'readWrite', db: 'car_main' }],
});
print('End Adding the User Roles.');
