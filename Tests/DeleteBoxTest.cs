using FluentAssertions;
using infrastructure;
using NUnit.Framework;

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
        Assert.Pass();

    }

    public async Task TestForPurpose()
    {
        Assert.Pass();
    }
}