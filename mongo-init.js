print('Started Adding the Car_Main');
db.createUser({
  user: 'carAdmin',
  pwd: 'Kin11001Mk?',
  roles: [{ role: 'readWrite', db: 'car_main' }],
});
print('End Adding the User Roles.');
