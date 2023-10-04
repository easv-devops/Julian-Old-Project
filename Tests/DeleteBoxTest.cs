using infrastructure;
namespace Tests;

public class DeleteBoxTest
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
        
        
        try
        { 
            repository.DeleteBoxById(addedBox.Id);
            repository.GetBoxById(addedBox.Id);
            Assert.Pass("Delete works! Yay");
        }
        catch (Exception e)
        {
            Assert.Fail("Delete test failed" + e);
        }
        
    }
}