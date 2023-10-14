import MyMap from './components/MyMap';
import MapSelector from './components/MapSelector';
import { StoreProvider } from './store';
function App() {
	return (
		<StoreProvider>
			<MapSelector />
			<MyMap />

		</StoreProvider>
	);
}

export default App;
