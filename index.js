// Code your solution here 
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driver, name){
  return  driver.filter(driver => driver.toUpperCase() === name.toUpperCase() );

}
//console.log(findMatching(drivers,'Bobby'))


function fuzzyMatch(dri, fLetter){
    return dri.filter(dri => dri.startsWith(fLetter));

}
//console.log(fuzzyMatch(drivers, "B"))

const driverss = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driver, name){
  return   driver.filter(driver => driver.name === name)
    
}
console.log(matchName(driverss, "Sammy"));

/*describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
      
      expect(matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]);
    });
  });
});
*/