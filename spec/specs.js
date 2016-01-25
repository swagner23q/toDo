describe('task', function() {
  it("creates a new task with given properties", function() {
    var testTask = new Task("Mopping", "Mop the kitchen", "1/26/2016")
    expect(testTask.title).to.equal("Mopping");
    expect(testTask.description).to.equal("Mop the kitchen");
    expect(testTask.dueDate).to.equal("1/26/2016");
  });
  it("concatinates task title and dueDate", function(){
    var testTask = new Task("Mopping", "Mop the kitchen", "1/26/2016");
    expect(testTask.toDo()).to.equal("Mopping - 1/26/2016");
  });
});
