using infrastructure;


namespace Tests;

    public class EditBoxTest {
  
        private Repository repository;
    
        [SetUp]
        public void Setup()
        {
            repository = new Repository();
        }

        [Test]
        public async Task ShouldSuccessfullyEditBook()
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
            Box boxToEdit = new Box
            {
                Width = 100,
                Length = 200,
                Height = 50,
                Volume = 10000,
                Material = "Metal",
                InventoryCount = 500,
                Price = 399
            };
            repository.AddBox(boxToAdd);
            try
            {
            repository.UpdateBox(boxToEdit);
            
                        Box retrievedBox = repository.GetBoxById(boxToEdit.Id);
                        Assert.NotNull(retrievedBox);
                        Assert.That(retrievedBox.Width, Is.EqualTo(boxToEdit.Width));
                        Assert.That(retrievedBox.Height, Is.EqualTo(boxToEdit.Height));
                        Assert.That(retrievedBox.Length, Is.EqualTo(boxToEdit.Length));
                        Assert.That(retrievedBox.Material,Is.EqualTo(boxToEdit.Material));
                        Assert.That(retrievedBox.Price,Is.EqualTo(boxToEdit.Price));
                        Assert.That(retrievedBox.InventoryCount,Is.EqualTo(boxToEdit.InventoryCount));
                        Assert.That(retrievedBox.Volume,Is.EqualTo(boxToEdit.Volume));
                        
                        Assert.Fail("Edit doesn't work!");
                        
                        repository.DeleteBoxById(retrievedBox.Id);
                        
            }
            catch (Exception e)
            {
                Assert.Fail("Edit doesn't work" + e);
            }
            
        }

    }
