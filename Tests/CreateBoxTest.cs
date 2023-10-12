using FluentAssertions;
using infrastructure;



namespace Tests;

public class CreateBoxTest
{
    private Repository _repository;
   
    Box retrievedBox = null;
    
    [SetUp]
    public void Setup()
    {
        _repository = new Repository();
        
    }
    

    [Test]
    public async Task ShouldSuccessfullyCreateBook()
    {
        Box boxToAdd = new Box
        {
            Width = 10,
            Length = 20,
            Height = 5,
            Volume = 1000,
            Material = "Cardboard",
            InventoryCount = 50,
            Price = 25.99,
            Name = "Test Boxxo"
        };
   
          Box addedBox  = _repository.AddBox(boxToAdd);
            Box retrievedBox = _repository.GetBoxById(addedBox.Id);
            
            retrievedBox.Should().BeEquivalentTo(addedBox, "it works!");
             _repository.DeleteBoxById(retrievedBox.Id);
             Assert.Pass("We did it!");
        
    }
    
}