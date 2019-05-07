describe("Pre UAT Checks", function() {
	it("Should have title and only 1", function() {
		cy.visit("http://localhost:3000/index.html");
		cy.get("title").should($title => {
			expect($title).to.have.length(1);
		});
	});
	it("Should have h1 and only 1", function() {
		cy.visit("http://localhost:3000/index.html");
		cy.get("body h1").should($h1 => {
			expect($h1).to.have.length(1);
		});
	});
	it("if a has href should not be empty", function() {
		cy.visit("http://localhost:3000/index.html");

		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("include", "/");
		});
	});

	it("Img's should have alt tags", function() {
		cy.visit("http://localhost:3000/index.html");
		cy.get("img").each($el => {
			cy.wrap($el).should("have.attr", "alt");
		});
	});

	it("No links have ao.com ao.de ao.nl", function() {
		cy.visit("http://localhost:3000/index.html");
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://ao.com");
		});
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://ao.de");
		});
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://ao.nl");
		});
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://ao-business.com");
		});
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://www.ao.com");
		});
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://www.ao.de");
		});
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://www.ao.nl");
		});
		cy.get("a[href]").each($el => {
			cy.wrap($el)
				.should("have.attr", "href")
				.and("not.include", "https://www.ao-business.com");
		});
	});
	it("p with enough content should have an &nbsp; to stop windowed words", function() {
		const nbsp = decodeURI("nbsp");
		cy.visit("http://localhost:3000/index.html");

		cy.get("p").each($el => {
			var paraLength = $el.context.innerHTML.length;

			if (paraLength >= 40) {
				cy.wrap($el.context.outerHTML).should("contain", nbsp);
			}
		});
	});
});
