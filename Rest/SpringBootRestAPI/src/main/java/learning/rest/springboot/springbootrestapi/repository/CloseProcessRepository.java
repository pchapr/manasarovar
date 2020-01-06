package learning.rest.springboot.springbootrestapi.repository;

import learning.rest.springboot.springbootrestapi.dao.CloseProcess;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CloseProcessRepository extends MongoRepository<CloseProcess, String> {

    List<CloseProcess> findCloseProcessBy(@Param("processName") String processName);

    CloseProcess findBy_id(ObjectId id);
}
