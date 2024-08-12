import ComponentC from './ComponentC';

export default function ComponentB() {
  return (
    <div className='border-4 border-solid border-blue-600 rounded-md p-10'>
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
}
