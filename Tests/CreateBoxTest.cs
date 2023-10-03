using infrastructure;
using NUnit.Framework;


namespace Tests;

public class CreateBoxTest
{
    private Repository repository;
    
    [SetUp]
    public void Setup()
    {
        repository = new Repository();
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
        Box addedBox = repository.AddBox(boxToAdd);
        
        Assert.NotNull(addedBox);

        var url = "http://localhost:5054/api/boxes";

        Box retrievedBox = repository.GetBoxById(boxToAdd.Id);
        Assert.NotNull(retrievedBox);
        Assert.That(retrievedBox.Width, Is.EqualTo(boxToAdd.Width));
        Assert.That(retrievedBox.Height, Is.EqualTo(boxToAdd.Height));
        Assert.That(retrievedBox.Length, Is.EqualTo(boxToAdd.Length));
        Assert.That(retrievedBox.Material,Is.EqualTo(boxToAdd.Material));
        Assert.That(retrievedBox.Price,Is.EqualTo(boxToAdd.Price));
        Assert.That(retrievedBox.InventoryCount,Is.EqualTo(boxToAdd.InventoryCount));
        Assert.That(retrievedBox.Volume,Is.EqualTo(boxToAdd.Volume));

    }

}