import classes from './app-info.module.css';

const AppInfo = () => {
  return (
    <div className={classes['app-info']}>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников</h2>
      <h2>Премию получит:</h2>
    </div>
  );
};

export default AppInfo;
