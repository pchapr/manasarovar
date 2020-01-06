package learning.rest.springboot.springbootrestapi.controller;

import learning.rest.springboot.springbootrestapi.dao.CloseProcess;
import learning.rest.springboot.springbootrestapi.repository.CloseProcessRepository;
import lombok.extern.java.Log;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Log
public class CloseProcessStatusController {

    @Autowired
    private CloseProcessRepository repository;

//    @RequestMapping("/CloseProcess")
//    public CloseProcess getProcessStatus(@RequestParam(value="processName", defaultValue = "LOCOM1 Pricing") String processName) {
//        log.info("Recevied Request for process name: "+processName);
//        CloseProcess process = new CloseProcess();
//        process.set_id(ObjectId.get());
//        process.setProcessName(processName);
//        process.setStartTime(System.currentTimeMillis());
//        process.setOperationState(CloseProcess.OperationState.START);
//        process.setProcessStatus(CloseProcess.Status.INPROGRESS);
//        return process;
//    }

    @RequestMapping(value = "/CloseProcess", method = RequestMethod.POST)
    public CloseProcess createCloseProcess(@Valid @RequestBody CloseProcess closeProcess) {
        closeProcess.set_id(ObjectId.get());
        repository.save(closeProcess);
        return closeProcess;
    }

    @RequestMapping(value = "/CloseProcess/{id}", method = RequestMethod.DELETE)
    public void deleteCloseProcess(@PathVariable("id") ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }

    @RequestMapping(value = "/CloseProcess/{id}", method = RequestMethod.PUT)
    public CloseProcess updateCloseProcess(@PathVariable("id") ObjectId id,
                                           @Valid @RequestBody CloseProcess closeProcess) {
        closeProcess.set_id(id);
        repository.save(closeProcess);
        return closeProcess;
    }

    @RequestMapping(value = "/CloseProcess", method = RequestMethod.GET)
    public List<CloseProcess> getFullCloseProcessStatus() {
        return repository.findAll();
    }
}
