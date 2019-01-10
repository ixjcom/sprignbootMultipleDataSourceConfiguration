package liu.cn.ilxj;

public class DataSourceSwitchChoose {
    private static final ThreadLocal<String> threadLocal = new ThreadLocal<>();
    public static void setDB(String dataSourceType){
        threadLocal.set(dataSourceType);
    }
    public static String getDataSourceName(){
        return threadLocal.get();
    }
}
