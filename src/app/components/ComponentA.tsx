import ComponentB from './ComponentB';

export default function ComponentA() {
  return (
    <div className='border-4 border-solid border-blue-600 rounded-md p-10'>
      <h1>ComponentA</h1>
      <ComponentB />
    </div>
  );
}
