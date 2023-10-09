using FluentAssertions;
using infrastructure;
namespace Tests;

public class DeleteBoxTest
{
    private Repository _repository;

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
            Price = 25.99
        };
        Box addedBox = _repository.AddBox(boxToAdd);
            _repository.DeleteBoxById(addedBox.Id);
            
            Assert.IsFalse(_repository.DeleteBoxById(addedBox.Id));
            Assert.Pass("it works!");


    }
}