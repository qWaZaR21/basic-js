module.exports = function createDreamTeam(arrayTeam) {
  if (!(Array.isArray(arrayTeam))) return false;
  const teamName = arrayTeam.reduce((arrFirstLetter, memberName) => {
    if (memberName && typeof memberName === 'string') {
      arrFirstLetter.push(memberName.trim()[0].toUpperCase());
    }
    return arrFirstLetter;
  }, []);
  return teamName.sort().join('');
};
