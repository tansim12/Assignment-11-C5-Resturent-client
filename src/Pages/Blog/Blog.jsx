const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-10 my-10">
      <p className="text-5xl text-center from-purple-300 mb-10 via-red-500 to-indigo-500 bg-gradient-to-br text text-transparent bg-clip-text font-black">
        FAQs
      </p>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          What is One way data binding?
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
          One-way data binding is a concept often used in front-end web development to describe the process of updating the user interface (UI) elements based on changes in the underlying data model, but not vice versa. In this approach, data changes in the model are reflected in the UI, but changes in the UI do not affect the model directly. This means that the data flows in one direction, typically from the model to the view. One-way data binding is commonly used in frameworks like AngularJS, where the framework takes care of synchronizing the data model and the UI elements.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow my-5 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          What is NPM in node.js?
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
            NPM means node Package manager . Its build by V8 engine . NPM is a package . NPM run by Node.js . NPM is used for installing, managing, and sharing packages (libraries, frameworks, and tools) for JavaScript and Node.js development. Developers can use NPM to easily install third-party packages or modules that can be integrated into their Node.js projects.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  my-5 border ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base sm:text-xl font-medium border border-neutral rounded-t-2xl">
          Different between Mongodb database vs mySQL database.
        </div>
        <div className="collapse-content text-xs sm:text-base text-black bg-gray-200">
          <p>
            {" "}
            Mongodb is noSQL data base . MySQL is SQL data base . Mongodb is
            collection base working . It is flexibility more then MySQL database
            . It is doc base . MySQL is commonly used for traditional relational
            database applications where data integrity and complex queries are
            critical, such as e-commerce systems and financial applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
