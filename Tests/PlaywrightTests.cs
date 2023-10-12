using Microsoft.Playwright;
using Microsoft.Playwright.NUnit;

namespace Tests;

[Parallelizable(ParallelScope.Self)]
[TestFixture]
public class PlaywrightTests : PageTest
{
    [Test]
    public async Task CreateBoxExists()
    {
        await Page.GotoAsync("http://localhost:4200/home");
        var createButton = Page.GetByRole(AriaRole.Button, new() { Name = "Create Box" });
        await createButton.ClickAsync();
        var nameInput = Page.GetByLabel("Name");
        await nameInput.ClickAsync();
        await nameInput.FillAsync("aaaaaa");
        var materialInput = Page.GetByLabel("Material");
        await materialInput.ClickAsync();
        await materialInput.FillAsync("TestMaterial");
        var widthInput = Page.GetByLabel("Width");
        await widthInput.ClickAsync();
        await widthInput.FillAsync("23");
        var lengthInput = Page.GetByLabel("Length");
        await lengthInput.ClickAsync();
        await lengthInput.FillAsync("23");
        var heightInput = Page.GetByLabel("Height");
        await heightInput.ClickAsync();
        await heightInput.FillAsync("23");
        var VolumeInput = Page.GetByLabel("Volume");
        await VolumeInput.ClickAsync();
        await VolumeInput.FillAsync("23");
        var priceInput = Page.GetByLabel("Price");
        await priceInput.ClickAsync();
        await priceInput.FillAsync("23");
        var inventoryInput = Page.GetByLabel("Inventory");
        await inventoryInput.ClickAsync();
        await inventoryInput.FillAsync("23");
        var saveButton = Page.GetByRole(AriaRole.Button, new() { Name = "Save" });
        await saveButton.ClickAsync();
        
        await Page.GotoAsync("http://localhost:4200/home", new PageGotoOptions{Timeout = 15000});

        var createdBox =   Page.GetByRole(AriaRole.Heading, new() { Name = "aaaaaa" });

        await Expect(createdBox).ToBeVisibleAsync();

        var deleteIcon = Page.Locator("ion-card").Filter(new()
                { HasText = "aaaaaaTestMaterial23 x 23 x 23 Material: TestMaterial Volume: 23 cm3 Price: 23 A" })
            .GetByRole(AriaRole.Img).Nth(2);

        await deleteIcon.ClickAsync();
    }
}