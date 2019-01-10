package liu.cn.ilxj;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Component
@Primary
public class DynamicDataSource extends AbstractRoutingDataSource {

    @Autowired
    @Qualifier("datasource1")
    private DataSource datasource1;
    @Autowired
    @Qualifier("datasource2")
    private DataSource datasource2;

    @Override
    protected Object determineCurrentLookupKey() {
        return DataSourceSwitchChoose.getDataSourceName();
    }

    @Override
    public void afterPropertiesSet() {
        Map<Object,Object>map = new HashMap<>();
        map.put("datasource1",datasource1);
        map.put("datasource2",datasource2);
        setTargetDataSources(map);
        setDefaultTargetDataSource(datasource1);
        super.afterPropertiesSet();
    }
}
