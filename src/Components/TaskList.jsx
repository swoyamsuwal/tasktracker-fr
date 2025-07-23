import Button from './Button'

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one above.</p>
      ) : (
        <div className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <div key={task.id} className="py-3 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleComplete(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span
                  className={`ml-3 ${
                    task.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-900'
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <Button type="delete" onClick={() => onDelete(task.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
