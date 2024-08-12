import ComponentD from './ComponentD';

export default function ComponentC() {
  return (
    <div className='border-4 border-solid border-blue-600 rounded-md p-10'>
      <h1>ComponentC</h1>
      <ComponentD />
    </div>
  );
}
