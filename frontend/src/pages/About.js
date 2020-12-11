import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

export function About() {

  const { url, path } = useRouteMatch();

  return (
    <div>
      <header>
        <h2>About</h2>
      </header>
      <nav>
        <ul>
          <li><Link to={`${url}/mission`}>Mission</Link></li>
          <li><Link to={`${url}/history`}>History</Link></li>
          <li><Link to={`${url}/team`}>Team</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${path}/mission`}>
          <h3>Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sollicitudin augue, non facilisis mauris. In tincidunt lacus vitae varius sagittis. Praesent viverra tristique ipsum, quis consequat sem ultrices quis. Curabitur id sem mollis, ornare diam non, mattis ligula. Cras interdum tortor a massa porttitor, eget commodo lorem tincidunt. Praesent sit amet tellus urna. Mauris auctor, nunc id ornare suscipit, nibh quam porttitor augue, vitae ornare purus quam in risus. In tincidunt felis a est vestibulum interdum. Cras ut sem eu est bibendum sagittis.</p>
        </Route>
        <Route path={`${path}/history`}>
          <h3>History</h3>
          <p>Ut imperdiet, dui ut egestas eleifend, nibh lacus condimentum sem, sed sodales leo ligula et leo. Curabitur molestie quam est, nec porttitor augue placerat scelerisque. Nunc auctor sapien ut porttitor convallis. Vivamus fringilla quis massa ut tincidunt. Cras tellus ipsum, elementum sed lectus et, tincidunt interdum urna. Donec rhoncus mauris dui, ut feugiat turpis tempus et. Mauris viverra dolor ut eros fermentum lobortis. Fusce efficitur sem sit amet felis egestas facilisis. Morbi malesuada ut orci blandit interdum.</p>
        </Route>
        <Route path={`${path}/team`}>
          <h3>Team</h3>
          <p>Nulla semper sollicitudin elit, a iaculis enim lobortis id. Suspendisse rutrum ultrices viverra. Quisque ultricies tristique justo. Sed accumsan pretium felis, et facilisis nibh. Phasellus tristique accumsan convallis. Nulla eu ultricies massa. Sed feugiat ex consequat interdum dictum. Donec ut nisi placerat, feugiat nulla vel, facilisis tellus. Duis et tortor a mi ultricies pretium. Suspendisse auctor sollicitudin nisl vel semper. Donec et odio turpis. Sed lobortis finibus ante, quis pretium orci finibus sed. Etiam egestas tristique dignissim.</p>
        </Route>
        <Route path={`${path}`}>
          <h3>Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sollicitudin augue, non facilisis mauris. In tincidunt lacus vitae varius sagittis. Praesent viverra tristique ipsum, quis consequat sem ultrices quis. Curabitur id sem mollis, ornare diam non, mattis ligula. Cras interdum tortor a massa porttitor, eget commodo lorem tincidunt. Praesent sit amet tellus urna. Mauris auctor, nunc id ornare suscipit, nibh quam porttitor augue, vitae ornare purus quam in risus. In tincidunt felis a est vestibulum interdum. Cras ut sem eu est bibendum sagittis.</p>
        </Route>
      </Switch>
    </div>
  );

}