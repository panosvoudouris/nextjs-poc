import React from 'react';
import { NextPage } from 'next';
import PageTemplate from '../src/templates/top_page';
import ErrorBoundary from '../src/components/errorBoundary';

const Home: NextPage = () => (
  <ErrorBoundary>
    <PageTemplate title="Welcome">
      <h1 className="h1">Welcome to Citizens Advice</h1>
      <h2>
        Inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </h2>
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Totam rem aperiam. At vero eos et accusamus.
        Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
        reprehenderit qui in ea voluptate velit esse quam.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.{' '}
        <strong> Architecto beatae vitae dicta sunt explicabo.</strong>{' '}
        <em>
          {' '}
          Et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque.
        </em>{' '}
        Cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia.
      </p>
      <h2>Itaque earum rerum hic tenetur a sapiente delectus.</h2>
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Quia consequuntur magni dolores eos qui
        ratione voluptatem sequi nesciunt.
      </p>
      <ol>
        <li>
          Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo.
        </li>
        <li>Itaque earum rerum hic tenetur a sapiente delectus.</li>
        <li>Laboris nisi ut aliquip ex ea commodo consequat.</li>
      </ol>

      <h3>Eaque ipsa quae ab illo inventore veritatis et quasi.</h3>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque
        porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit.
      </p>
    </PageTemplate>
  </ErrorBoundary>
);

export default Home;
