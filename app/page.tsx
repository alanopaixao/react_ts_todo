import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// Icons
import { FaBeer } from 'react-icons/fa';

// interface
import { ITask } from './interface/Task';

export default function Home() {
  return (
    <div className="h-screen text-center flex flex-col justify-between">
      <Header />
      <main className="">
        <div>
          <h2 className="font-bold text-3xl pt-8">O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2 className="font-bold text-3xl pt-8">Suas tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
