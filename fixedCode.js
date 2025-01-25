To fix this, ensure the component using `useParams` is nested within the `Routes` component.  If restructuring the component tree is not possible, consider using the `useLocation` hook to access and parse the URL parameters directly.  This provides more flexibility but requires manual parsing.

```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const myParam = params.get('myParam');
  return <div>My param: {myParam}</div>;
}
```