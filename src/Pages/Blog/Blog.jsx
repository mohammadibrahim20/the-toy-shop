import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center font-bold uppercase mt-20">
        Question ans Answer
      </h2>
      <p className="text-center text-gray-600 font-medium my-3">
        Get answers to your FAQ
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 mt-10">
        <div>
          <div className="border border-indigo-300 rounded-md p-5 my-5">
            <h2 className="text-lg font-semibold text-indigo-500 mb-3 text-justify">
              <strong>Question : </strong>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>

            <p className="text-justify">
              <strong>Answer:</strong>
              An access token is a credential that is used to authenticate and
              authorize a user's access to protected resources. It typically
              contains information about the user and permissions associated
              with their account. Access tokens have a limited lifespan and are
              used for making authenticated API requests.
            </p>
            <p className="text-justify">
              A refresh token is a long-lived credential that is used to obtain
              a new access token when the current one expires. It is usually
              issued along with the access token and provides a way to maintain
              continuous user sessions without requiring frequent
              reauthentication. <br />
              Access tokens are typically stored in the client-side
              application's memory or local storage, as they need to be sent
              with each API request to authenticate the user. However, it's
              important to ensure that access tokens are not accessible to
              malicious scripts or attackers. <br />
              Refresh tokens, on the other hand, should be stored securely on
              the server-side. They should not be accessible to the client-side
              application or exposed to potential security risks. When a new
              access token is needed, the client-side application should make a
              request to the server with the refresh token, and the server will
              generate a new access token if the refresh token is valid. <br />
              Storing tokens securely and following best practices, such as
              implementing token revocation mechanisms and protecting against
              cross-site scripting (XSS) attacks, is crucial to ensure the
              security of user authentication and authorization in client-side
              applications.
            </p>
          </div>
          <div className="border border-indigo-300 rounded-md p-5 my-5">
            <h2 className="text-xl font-semibold text-indigo-500 mb-3 text-justify">
              <strong>Question : </strong>
              Compare SQL and NoSQL databases?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 border p-5">
              <div>
                <h6 className="text-base font-semibold">SQL databases:</h6>
                <ul className="list-disc ml-5">
                  <li>
                    Structured data model based on tables with rows and columns.
                  </li>
                  <li>Follows a predefined schema.</li>
                  <li>
                    Primarily used for complex queries, transactional integrity,
                    and strict data consistency.
                  </li>
                  <li>
                    Scaling is typically vertical and may require modifying
                    existing tables.
                  </li>
                  <li>
                    SQL query language (e.g., SELECT, JOIN, GROUP BY) for data
                    manipulation.
                  </li>
                  <li>
                    Commonly used in financial systems, e-commerce platforms,
                    and traditional relational applications.
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-base font-semibold">NoSQL databases:</h6>
                <ul className="list-disc ml-5">
                  <li>
                    Various data models, including key-value pairs, documents,
                    columns, and graphs.
                  </li>
                  <li>Flexible or schema-less data model.</li>
                  <li>
                    Suited for handling large volumes of unstructured or
                    semi-structured data.
                  </li>
                  <li>
                    Horizontal scalability across multiple servers or clusters.
                  </li>
                  <li>
                    Various query languages based on the data model (e.g.,
                    JavaScript-like for MongoDB, CQL for Cassandra).
                  </li>
                  <li>
                    Commonly used in modern web applications, content management
                    systems, IoT applications, and scenarios requiring flexible
                    data models and scalability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border border-indigo-300 rounded-md p-5 my-5">
            <h2 className="text-xl font-semibold text-indigo-500 mb-3 text-justify">
              <strong>Question : </strong>
              What is express js? What is Nest JS?
            </h2>

            <strong>Answer:</strong>
            <p className="text-justify">
              <strong>ExpressJS : </strong>
              is a popular, minimalist web application framework for Node.js. It
              provides a simple, flexible, and unopinionated approach to
              building web applications and APIs. Express.js allows developers
              to create robust server-side applications using JavaScript, with
              features such as routing, middleware support, and easy integration
              with various plugins and libraries.
            </p>
            <p className="text-justify">
              <strong>NestJS : </strong>
              on the other hand, is a progressive and opinionated Node.js
              framework for building scalable and efficient server-side
              applications. It is built on top of Express.js and enhances it
              with additional features, such as dependency injection, modular
              architecture, and strong typing with TypeScript. Nest.js promotes
              a structured and organized approach to application development,
              making it well-suited for building complex and enterprise-grade
              applications
            </p>
          </div>
          <div className="border border-indigo-300 rounded-md p-5 my-5">
            <h2 className="text-xl font-semibold text-indigo-500 mb-3 text-justify">
              <strong>Question : </strong>
              What is MongoDB aggregate and how does it work?
            </h2>

            <p className="tex">
              <strong>Answer:</strong>
              In MongoDB, the aggregate function is used to perform advanced
              data processing operations and analysis on collections of
              documents. It allows you to apply multiple operations, such as
              filtering, grouping, sorting, and transforming data, in a single
              query.
              <br />
              The aggregate pipeline in MongoDB consists of multiple stages,
              where each stage represents a data processing operation. These
              stages are applied sequentially, with the output of one stage
              becoming the input for the next stage. The pipeline stages can
              include operations like $match, $group, $sort, $project, and many
              more.
              <br />
              <strong>
                Here's a brief overview of how the MongoDB aggregate function
                works:
              </strong>
              <ul className="list-decimal ml-5">
                <li>
                  Define the pipeline: Construct an array of pipeline stages,
                  each representing a data processing operation.
                </li>
                <li>
                  Execute the aggregate query: Use the aggregate function in
                  MongoDB to run the pipeline on a specific collection.
                </li>
                <li>
                  Apply stages sequentially: The pipeline stages are processed
                  in the order they are defined, with the output of one stage
                  flowing into the next stage.
                </li>
                <li>
                  Perform data transformations and analysis: Each stage in the
                  pipeline performs a specific operation, such as filtering
                  documents, grouping data, calculating aggregations, or
                  reshaping the output.
                </li>
                <li>
                  Retrieve the final results: The last stage in the pipeline
                  typically shapes the output and specifies the fields to
                  include or exclude from the final result set.
                </li>
              </ul>
            </p>
          </div>
        </div>
        {/* <img
          src="https://img.freepik.com/premium-vector/useful-tips-abstract-concept-vector-illustration_107173-29003.jpg?w=826"
          alt=""
          srcSet=""
          className="my-auto"
        /> */}
      </div>
    </div>
  );
};

export default Blog;
