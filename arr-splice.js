let teamRoaster =['Alice','Bob','Charlie','Daina']

function spliceMethod(index,numToRemove,newMembers){
let removedMembers =teamRoaster.splice(index,numToRemove,...newMembers);
console.log('Removed Members : ',removedMembers)
console.log('Updated team members : ',teamRoaster);
}
spliceMethod(2,1,['Anu']);//replaces charlie at index
spliceMethod(2,0,["Sanu"]);//Add Sanu before Anu
spliceMethod(4,1,[]);//removed 4th index