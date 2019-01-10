package liu.cn.ilxj;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AopDataSourceSwtichChoose {
    @Before("execution(* liu.cn.ilxj.serviceDb1.*.*(..))")
    public void befaoreSwitchds(){
        DataSourceSwitchChoose.setDB("datasource1");
    }

    @Before("execution(* liu.cn.ilxj.serviceDb2.*.*(..))")
    public void befaoreSwitchds2(){
        DataSourceSwitchChoose.setDB("datasource1");
    }
}
