using FluentAssertions;
using infrastructure;


namespace Tests;

    public class EditBoxTest {
  
        private Repository _repository;
   
        Box retrievedBox = null;
    
        [SetUp]
        public void Setup()
        {
            _repository = new Repository();
        
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
                Price = 25.99,
                Name = "Test Boxxo"
            };
            Box addedBox  = _repository.AddBox(boxToAdd);
                
            Box boxToEdit = new Box
            {
                Id = addedBox.Id,
                Width = 100,
                Length = 200,
                Height = 50,
                Volume = 10000,
                Material = "Fancy Cardboard",
                InventoryCount = 500,
                Price = 205.99,
                Name = "Better Test Boxxo"
            };
            
            Box retrievedBox = _repository.UpdateBox(boxToEdit);

            retrievedBox.Should().BeEquivalentTo(boxToEdit);
            _repository.DeleteBoxById(retrievedBox.Id);
            Assert.Pass("We did it!");
        
        }

    }
